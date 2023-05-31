import { AuthRequest, AuthResponse, RegistrationRequest } from "@/interfaces/Auth";
import AuthService from "@/services/AuthService";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from '../../../interfaces/User';

interface AuthState {
    isAuth: boolean,
    user: User | undefined;
}

const initialState = {
    isAuth: false,
    user: undefined,
} as AuthState;

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async function (loginData: AuthRequest, { rejectWithValue }) {
        try {
            const response = await AuthService.login(loginData);
            localStorage.setItem('token', response.data.refreshToken)
            const data = JSON.parse(JSON.stringify(response.data))

            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async function (_, { rejectWithValue }) {
        try {
            await AuthService.logout();
            localStorage.removeItem('token')
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async function (registrationData: RegistrationRequest, { rejectWithValue, dispatch }) {
        try {
            const response = await AuthService.registration(registrationData)
            const data = JSON.parse(JSON.stringify(response.data))

            dispatch(loginUser(registrationData))

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

// export const checkAuth = createAsyncThunk(
//     'auth/checkAuth',
//     async function (_, { rejectWithValue }) {
//         try {
//             const response = await axios.get<AuthResponse>(`${API_URL}/refresh `)

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        setIsAuth(state, payloadAction: PayloadAction<boolean>) {
            state.isAuth = payloadAction.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isAuth = true;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isAuth = false;
        });
        builder.addCase(registerUser.fulfilled, (state, payload) => {
            state.user = payload.payload;
            state.isAuth = true;
        })
    }
});

export const {
    setIsAuth
} = authSlice.actions;
export default authSlice.reducer;