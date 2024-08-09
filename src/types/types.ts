export type toggle = React.Dispatch<React.SetStateAction<boolean>>;

export interface Item {
    link:string;
    shortenedLink:string;
    
}
export interface ItemCardProps {
    link:string;
    shortenedLink:string;
    isCopy: boolean;
    onCopy: () => void;
}