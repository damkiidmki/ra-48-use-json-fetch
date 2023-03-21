import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

export default function Data({url}) {
    const [{data, loading, error}] = useJsonFetch(url);

    return (
        <div>
            {data && <div>{data.status}</div>}
            {error && <div>{error}</div>}
            {loading && <div>...Loading</div>}
        </div>
        
    )
}