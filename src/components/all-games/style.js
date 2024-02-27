import styled from "styled-components"  

export const GamesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Filters = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 30px;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .selects{
        display: flex;
        align-items: center;
        gap: 15px;

        @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

        select{
            border-radius: 5px;
            padding: 5px;
            border: 2px solid #01203E;
            width: 170px;
        }
    }

    .inputs{
        display: flex;
        align-items: center;
        gap: 10px;

        @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

        input{
            border-radius: 5px;
            padding: 8px;
            width: 250px;
            border: 2px solid #01203E;
        }
    }
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

            .card{
                width: 400px;
                height: 300px;
                border-radius: 20px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

                @media screen and (max-width: 768px) {
                    width: 350px;
                    height: 350px;
                }

                .card-body{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    right: -100%;
                    position: absolute;
                    backdrop-filter: blur(5px);
                    border-radius: 15px;
                    background: #1f3d4738;
                    padding: 30px;
                    transition: 0.7s;
                    gap: 20px;
                    

                    h1{
                        color: white;
                    }

                    a{
                        color: white;
                        font-size: 20px;
                    }
                    
                }

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                }
            }

            .card:hover .card-body{
                    right: 0;
                }

                .game-title{
                color: black;
                font-size: 23px;
                margin-top: 15px;
                cursor: pointer;
                text-decoration: none;

                position: relative;
                letter-spacing: 0.5px;
                padding: 0 10px;
            }

            .game-title:after{
                    content: "";
                    position: absolute;
                    background-color: black;
                    height: 3px;
                    width: 0;
                    left: 0;
                    bottom: -5px;
                    transition: 0.3s;
                }

                .game-title:hover:after{
                    width: 100%;
                }
        }
    }
`