import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

   const estilosDaHomePage = {
    // backgroundColor:"red"
  };


  return (
     <>
       <CSSReset/>
          <div style = {estilosDaHomePage}>
              <Menu/>
              <Header/>
              <Timeline playlists ={config.playlists}/>
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
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header () {
  return (
      <StyledHeader>
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

function Timeline(props) {
   
  const playlistsNames = Object.keys(props.playlists)

  return (
     <StyledTimeline>
           {playlistsNames.map(function(playlistsName){
                const videos = props.playlists[playlistsName];
                return(
                      <section>
                           <h2>{playlistsName}</h2>
                           <div>
                               {videos.map((video) => {
                                   return (
                                        <a href = {video.url}>
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
