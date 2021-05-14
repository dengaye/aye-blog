import { useRouter } from "next/router";

const useAppRouter = () => {
    const { push } = useRouter();
    return {
        push
    }
}

export default useAppRouter;