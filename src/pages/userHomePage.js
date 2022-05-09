import React from 'react';
import { Component } from 'react';
import NavbarUser from '../components/navbarUser';
import Footerr from '../components/footer';

export class UserHomePage extends Component {

    state = {
       
    }

    render() {
        return(
            <div>
                <header>
                    <NavbarUser/>
                </header> 
                <br/>
                <br/>
                <br/>
                <br/>
                <body>
                Reads Websites like Humans
As a human, you're probably pretty good at telling a product page from a news article, or getting an idea of what a title says about the website you're reading.

What if you need to do that 10,000 times a minute? You could hire a lot more humans, or you could let Diffbot read it for you.

How it Works
Unlike traditional web scraping tools, Diffbot doesn't require any rules to read the content on a page.

It starts with computer vision, which classifies a page into one of 20 possible types. Content is then interpreted by a machine learning model trained to identify the key attributes on a page based on its type.

The result is a website transformed into clean structured data (like JSON or CSV), ready for your application.
                </body>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <footer>

                    <Footerr/>
                </footer>
            </div>
        );
    }
}
export default UserHomePage;