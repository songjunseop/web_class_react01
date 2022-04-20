import React from "react";

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>Email</h4>
                <a href="mailto:apdlvmf8044@gmail.com">apdlvmf8044@gmail.com</a>
            </div>
            <div>
                <h4>Kakao</h4>
                <a href="/">jun80444</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instargram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Reference</a></li>
                    <li><a href="/">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;