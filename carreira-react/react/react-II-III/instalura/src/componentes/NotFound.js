import React, {Component} from 'react';
import '../css/not-found.css';
import $ from 'jquery';
import Header from "./Header";

let fadeInText = function () {
    $(".top-text").fadeIn().css("opacity", 1);
    $(".bottom-text h1").css("opacity", 1).fadeIn();
};

let fadeInParagraph = function () {
    $("p").css("opacity", 1);
};

let fillInLines = function () {
    $(".top").css("width", "100%").css("opacity", 1);
    $(".inline").css("width", "25%").css("opacity", 1);
};

let shrinkText = function () {
    $('.centered-text-area').css({
        '-webkit-transform': 'scale(1.0,1.0)',
        '-moz-transform': 'scale(1.0,1.0)',
        '-ms-transform': 'scale(1.0,1.0)',
        '-o-transform': 'scale(1.0,1.0)',
        'transform': 'scale(1.0,1.0)'
    });
};

window.setTimeout(shrinkText, 100);
window.setTimeout(fadeInText, 500);
window.setTimeout(fillInLines, 3000);
window.setTimeout(fadeInParagraph, 5000);

export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="not-found">
                <Header/>
                    <div className="centered-text-area">
                        <hr className="top"/>
                        <h1 className="top-text"><span className="bigger-letter">S</span>TRANGE<span
                            className="bigger-letter">R</span></h1>
                        <div className="bottom-text">
                            <hr className="inline"/>
                            <h1>404</h1>
                            <hr className="inline"/>
                        </div>

                        <p>Woah, you rolled a 404 and the Demogorgan came out to eat the page you were looking for.
                            Looks like your party needs to go back and look for the page again.</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
