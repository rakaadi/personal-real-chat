export type User = {
    id: number,
    name: string,
    room: string
}

export interface IUsersList {
    users: User[]
}

export interface IMessageProps {
    message: {
        text: string,
        user: string
    },
    name: string
}

export interface IMessagesProps {
    messages: IMessageProps["message"][],
    name: string
}

export interface IInputProps {
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    sendMessage: Function,
    message: string
}

export type ChatProps = {
    location: string | any
}
