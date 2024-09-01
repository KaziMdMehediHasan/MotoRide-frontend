// login data type
export type TLoginData = {
    email: string,
    password: string
}
// account register data type

export type TRegisterData = {
    name: string,
    email: string,
    password: string,
    phone: string
}

//authentication data type

export type TUserDetail = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v?: number
}
export type TAuthState = {
    user: null | object;
    token: null | string;
    userDetail: TUserDetail | null;
}

export type Data = {
    data: TUserDetail;
    message: string;
    statusCode: number;
    success: true
}

export type TUpdatedUser = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
}

export type TLoggedInUser = {
    userId?: string;
    userEmail?: string;
    role?: string;
    iat?: number;
    exp?: number;
}
