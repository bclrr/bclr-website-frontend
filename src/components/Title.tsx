import { useEffect, useState } from "react";

function Title() {

    const [test, setTest] = useState("");

    useEffect(() => {
        fetch("/api/test")
        .then(res => res.text())
        .then(data => setTest(data));
    }, []);

    return (
        <div>
            <h2>test below</h2>
            <h1>{test}</h1>
        </div>
    )
}

export default Title