interface IUserRepo {
    getUserByName(name: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
