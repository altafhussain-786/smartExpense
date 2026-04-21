import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"

export const getDashboardSummary = createAsyncThunk(
    "dashboard/getSummary",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/dashboard/summary")
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: "Network Error" })
        }
    }
)
export const getRecentTransactions = createAsyncThunk(
    "dashboard/getRecentTransactions",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/dashboard/recent-transactions")
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: "Network Error" })
        }
    }
)
export const addTransaction = createAsyncThunk(
    "dashboard/addTransaction",
    async (transactionData, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post("/dashboard/add", transactionData)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: "Network Error" })
        }
    }
)
export const fetchAnalytics = createAsyncThunk(
    "dashboard/fetchAnalytics",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/dashboard/summary")
            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: "Network Error" })
        }
    }
)
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        summary: null,
        summaryLoading: false,
        summaryError: null,
        transactions: [],
        transactionsLoading: false,
        transactionsError: null,
        isAdding: false,
        addSuccess: false,
        addError: null,
        analytics: {
            monthlyTrend: [],
            categorySpending: [],
            totalSpent: 0,
        },
        analyticsLoading: false,
        analyticsError: null,
    },
    reducers: {
        clearAddSuccess: (state) => {
            state.addSuccess = false
            state.addError = null
        },
        clearErrors: (state) => {
            state.summaryError = null
            state.transactionsError = null
            state.addError = null
            state.analyticsError = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDashboardSummary.pending, (state) => {
                state.summaryLoading = true
                state.summaryError = null
            })
            .addCase(getDashboardSummary.fulfilled, (state, action) => {
                state.summaryLoading = false
                state.summary = action.payload
            })
            .addCase(getDashboardSummary.rejected, (state, action) => {
                state.summaryLoading = false
                state.summaryError = action.payload?.message || "Failed to load summary"
            })
        builder
            .addCase(getRecentTransactions.pending, (state) => {
                state.transactionsLoading = true
                state.transactionsError = null
            })
            .addCase(getRecentTransactions.fulfilled, (state, action) => {
                state.transactionsLoading = false
                state.transactions = action.payload
            })
            .addCase(getRecentTransactions.rejected, (state, action) => {
                state.transactionsLoading = false
                state.transactionsError = action.payload?.message || "Failed to load transactions"
            })
        builder
            .addCase(addTransaction.pending, (state) => {
                state.isAdding = true
                state.addSuccess = false
                state.addError = null
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.isAdding = false
                state.addSuccess = true
                state.transactions.unshift(action.payload)
            })
            .addCase(addTransaction.rejected, (state, action) => {
                state.isAdding = false
                state.addSuccess = false
                state.addError = action.payload?.message || "Failed to add transaction"
            })
        builder
            .addCase(fetchAnalytics.pending, (state) => {
                state.analyticsLoading = true
                state.analyticsError = null
            })
            .addCase(fetchAnalytics.fulfilled, (state, action) => {
                state.analyticsLoading = false
                state.analytics = action.payload
            })
            .addCase(fetchAnalytics.rejected, (state, action) => {
                state.analyticsLoading = false
                state.analyticsError = action.payload?.message || "Failed to load analytics"
            })
    },
})

export const { clearAddSuccess, clearErrors } = dashboardSlice.actions
export default dashboardSlice.reducer