
export type Data = {
    text: string;
    index: string;
    title: string;
    _id: string;
}

export type Context = {
    toggleSwitch: () => void;
    bool: boolean;
    mode: string;
    novelUrl: string;
    loginUrl: string;
}

export type LoginForm = {
    text: string;
    password: string;
}

export type FormType = {
    title: string;
    index: string;
    text: string;
}