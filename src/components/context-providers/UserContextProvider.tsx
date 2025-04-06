import {FC, PropsWithChildren, useEffect, useState} from "react";
import {UserContext} from "@/context/UserContext.ts";
import {IUser} from "types/pc/user.ts";
import {useFetchingWithoutRedirect} from "@/hooks/useFetching.ts";
import UserService from "@/api/services/UserService.ts";

const UserContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [fetchUser, isUserLoading] = useFetchingWithoutRedirect(
        async () => {
            setUser(await UserService.getUser())
        }
    )

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <UserContext value={[user, isUserLoading, fetchUser as unknown as () => Promise<void>]}>
            {children}
        </UserContext>
    );
};

export default UserContextProvider;