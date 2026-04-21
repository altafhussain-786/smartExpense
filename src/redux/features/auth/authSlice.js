import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
const getUserFromStorage = () => {
    try {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    } catch {
        return null
    }
}
export const signupUser = createAsyncThunk(
    'auth/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('/auth/signup', userData)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Network Error' })
        }
    }
)
export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('/auth/login', credentials)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Network Error' })
        }
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: getUserFromStorage(),
        token: localStorage.getItem('token') || null,
        isLoading: false,
        error: null,
        isSuccess: false,
    },

    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.error = null
            state.isSuccess = false
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        },
        clearError: (state) => {
            state.error = null
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.isLoading = true
                state.error = null
                state.isSuccess = false
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.error = null
                state.user = action.payload.user
                state.token = action.payload.token
                localStorage.setItem('user', JSON.stringify(action.payload.user))
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.error = action.payload?.message || 'Signup Failed'
            })
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
                state.isSuccess = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.error = null
                state.user = action.payload.user
                state.token = action.payload.token
                localStorage.setItem('user', JSON.stringify(action.payload.user))
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.error = action.payload?.message || 'Login Failed'
            })
    },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer