import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Button from "./Button";
import useLocalStorage from "./hooks/useLocalStorage";

function App()
{
    const[html,setHtml]=useLocalStorage('html','')
    const[css,setCss]=useLocalStorage('css','')
    const[js,setJs]=useLocalStorage('js','')
    const[srcDoc,setSrcDoc]=useState('')

    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html> `)
        }, 300)

        return ()=> clearTimeout(timeout)
    },[html, css, js])

    let buttonData=[
        {
            id:'b1',
            bname:'Save',
        },
        {
            id:'b2',
            bname:'Settings',
        },
        {
            id:'b3',
            bname:'Sign Up',
        },
        {
            id:'b4',
            bname:'Log In',
        },
        {
            id:'b5',
            bname:'Download',
        },
    ]

    return(
        <div>
            <div>
                <Button data={buttonData} />
            </div>
            <div className="pane top-pane">
                <Editor language="xml" displayName="html"
                value={html} onChange={setHtml} />

                <Editor language="css" displayName="css"
                value={css} onChange={setCss} />

                <Editor language="javascript" displayName="js"
                value={js} onChange={setJs} />
            </div>
            <div className="pane">
                <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
                width="100%"
                height="100%"/>
            </div>
        </div>
    );

}

export default App;