import { CHANGE_WALLET } from "./types"

export const setWallet = (wallet) => (
    {
        type: CHANGE_WALLET,
        wallet: wallet
    }
);