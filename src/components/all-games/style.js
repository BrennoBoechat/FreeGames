import styled from "styled-components"  

export const GamesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GamesContent = styled.div`
    max-width: 1600px;
    margin: 50px;
    
    

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 90px;

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            a{
                color: black;
                font-size: 23px;
                margin-top: 15px;
                cursor: pointer;
                text-decoration: none;

                position: relative;
                letter-spacing: 0.5px;
                padding: 0 10px;
            }

            a:after{
                    content: "";
                    position: absolute;
                    background-color: black;
                    height: 3px;
                    width: 0;
                    left: 0;
                    bottom: -5px;
                    transition: 0.3s;
                }

            a:hover:after{
                    width: 100%;
                }

            img{
                border-radius: 15px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
        }
    }
`

export const Filters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;

    .selects{
        display: flex;
        gap: 15px;
    }

    .inputs{
        display: flex;
        gap: 10px;
    }
`