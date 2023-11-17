"use client";
import { useSearchParams, usePathname, useParams } from "next/navigation";

const Test = () => {
    // URLのパラメーターを取得
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    console.log(name);

    // URLのパスを取得
    const pathname = usePathname();
    console.log(pathname);

    // 動的ルーティングのパラメータを取得
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            Enter
        </div>
    );
}

export default Test;
