import styled from "styled-components"  

export const GamesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GamesContent = styled.div`
    max-width: 1200px;
    margin: 50px;
    
    

    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 colunas com tamanhos iguais */
        gap: 10px;
        justify-content: center;
        align-items: center;
        gap: 50px;

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p{
                color: black;
                font-size: 23px;
                margin-top: 15px;
            }

            img{
                border-radius: 15px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
        }
    }
`