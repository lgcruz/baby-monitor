import { IconParamInterface } from '@/interfaces/iconInterfaces';

function TableWrapper(props: {url:string, title:string}): JSX.Element {
    const { url, title } = props;
    return (
    <div className="rounded-[15px] p-2 w-[calc(100%)] flex justify-center items-center bg-black flex-col">
        <div className="w-full text-center">
            <div className="text-base text-white">{title}</div>
        </div>
        <iframe width="450" height="260" style={{border: "1px solid #cccccc"}} src={url}></iframe>
    </div>);
            
};

export default TableWrapper;
