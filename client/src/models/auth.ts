export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUserDto;
}

export interface IUserDto {
    email: string;
    isActivated: boolean;
    id: string;
}