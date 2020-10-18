import Button from 'react-bootstrap/Button'

import React, {useState, useEffect} from 'react'

function simulateNetworkRequest(){
    return new Promise((resolve) => setTimeout(resolve,2000));
}

export default function LoadingButton(){
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if(isLoading){
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    function handleClick(){
        if(!isLoading){
            setLoading(true);
        }
        fade('loginBtn');
        fadeIn('login-form');

    }

    return (
            <Button
                id="loginBtn"
                variant="primary"
                disabled={isLoading}
                onClick={handleClick}
            >
                {isLoading ? 'Loading...' : 'Login'}
            </Button>
    );
}

export function fade(elementToFade){
    var element = document.getElementById(elementToFade);
    var op = 1;
    var timer = setInterval(function(){
        if(op <= 0.1){
            clearInterval(timer);
            element.style.display= 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op *100 + ")";
        op -= op*0.1;
    }, 50);
}

export function fadeIn(elementToFade){
    var element = document.getElementById(elementToFade);
    element.style.display = 'block';
    var op = 0.1;
    var timer = setInterval(function(){
        if(op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op*100 + ")";
        op += op*0.05;
    }, 50);
}

