import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import {useState} from "react"

function HomePage() {

   const estilosDaHomePage = {
    // backgroundColor:"red"
  };

  const [valorDoFiltro ,setValorDoFiltro] = useState("");


  return (
     <>
          <div style = {{
              display:"flex",
              flexDirection:"column",
              flex:1,
          }}>
              <Menu valorDoFiltro ={valorDoFiltro} setValorDoFiltro ={setValorDoFiltro}/>
              <Header/>
              <Timeline searchValue={valorDoFiltro} playlists ={config.playlists}/>
          </div>
     </>  
  )
}

export default HomePage;

// function Menu () {
//    return (
//      <div>
//          Menu
//      </div>
//    )
// }

const StyledHeader = styled.div`

    background-color:${({theme}) => theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
  background-color: blue;
  /* background-image: url(${config.bg}); */
  background-image: url(${({bg}) => bg});
  background-size:cover;
  height:230px;

`

function Header () {
  return (
      <StyledHeader>
        <StyledBanner bg ={config.bg}/>
          {/* <img src="banner" alt="" /> */}
          <section className ="user-info">
              <img src={`https://github.com/${config.github}.png`}/>
              <h2>
                  {config.name}
              </h2>
              <p>
                  {config.job}
              </p>
          </section>
      </StyledHeader>
  )
}

function Timeline({searchValue ,...props }) {
   
  const playlistsNames = Object.keys(props.playlists)

  return (
     <StyledTimeline>
           {playlistsNames.map(function(playlistsName){
                const videos = props.playlists[playlistsName];
                return(
                      <section key ={playlistsName}>
                           <h2>{playlistsName}</h2>
                           <div>
                               {videos.filter((video) => {
                                   const titleNormalized = video.title.toLowerCase();
                                   const searchValueNormalized = searchValue.toLowerCase();
                                   return titleNormalized.includes(searchValueNormalized)  
                               })
                               .map((video) => {
                                   return (
                                        <a key ={video.url} href = {video.url}>
                                            <img src={video.thumb} alt="" />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                   )
                               })}
                           </div>                
                      </section>
                )
           })}
      </StyledTimeline>
  )
}
