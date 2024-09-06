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
export type TUserInfo = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    profileImg?: string;
}
export type TUpdateUser = {
    [key: string]: string
}

export type TUserDetail = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    profileImg?: string;
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

// bike types
export type TBike = {
    data?: TBike | undefined
    _id?: string;
    brand?: string;
    cc?: number;
    description?: string;
    isAvailable?: boolean;
    model?: string;
    name?: string;
    pricePerHour?: number;
    year?: number,
    img?: unknown;
}

// event types
export type FormEvent = React.InputHTMLAttributes<HTMLInputElement>