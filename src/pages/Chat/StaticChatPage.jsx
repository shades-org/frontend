import { Avatar, Box, Container, CssBaseline } from "@mui/material";
import { Videocam, DoNotDisturb, Send } from "@mui/icons-material";
import { EventNote } from "@mui/icons-material";

const TopBar = () => {

  const topBarStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    backgroundColor: "#680747",
    textTransform: "capitalize",
    borderRadius: "20px",
    height: "2.4rem",
    boxShadow: "0 0 0 0",
    paddingInline: "0.8rem",
    width: "100%"
  };

  const iconsRightStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    gap: 4,
    alignItems: "center",
    justifyContent: "end",
    flexGrow: 1,
    color: "rgba(255, 255, 255, 0.7)",
  }

  const userStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    gap: 6,
  }

  return (
    <Box style={topBarStyle}>
      <Box style={userStyle}>
        <Avatar alt="John Doe" sx={{ width: 24, height: 24 }} />
        <Box>John Doe</Box>
      </Box>
      <Box style={iconsRightStyle}>
        <EventNote />
        <Videocam />
        <DoNotDisturb />
      </Box>
    </Box>
  );
}

const ChatBubbleOutgoing = ({ children }) => {
  return (
    <Box style={{
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "end",
      width: "100%"
    }}>
      <Box style={{
        minWidth: 200,
        maxWidth: 500,
        backgroundColor: "hsla(316, 30%, 84%, 0.4)",
        padding: "5px 10px",
        borderRadius: 10
      }}>
        {children}
      </Box>
    </Box>
  )
}

const ChatBubbleIncoming = ({ children }) => {
  return (
    <Box style={{
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "start",
      width: "100%"
    }}>
      <Box style={{
        minWidth: 200,
        maxWidth: 500,
        backgroundColor: "hsla(216, 30%, 84%, 0.4)",
        padding: "5px 10px",
        borderRadius: 10
      }}>
        {children}
      </Box>
    </Box>
  )
}

const TextInput = (children) => {
  const inputStyle = {
    color: "black",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    height: "2.4rem",
    border: 0,
    paddingInline: "0.8rem",
    outline: "none",
    flexGrow: 1
  };

  return (
    <Box style={{
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      gap: 5,
      color: "rgba(255, 255, 255, 0.6)",
    }}>
      <input style={inputStyle} />
      <Send style={{ cursor: "pointer" }} />
    </Box>
  );
}

const StaticChatPage = () => {

  return (
    <div>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100vw",
          m: 0,
          pt: 2
        }}
        style={{
          background: "linear-gradient(180deg, rgba(172,0,142,1) 0%, rgba(9,0,92,1) 100%)",
        }}
      >
        <TopBar />
        <Box
          sx={{
            display: "flex",
            padding: 5,
            gap: 2,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            overflow: "hidden",
            minHeight: "84vh"
          }}
        >
          <ChatBubbleIncoming>Hey, how are you doing?</ChatBubbleIncoming>
          <ChatBubbleOutgoing>Hello! Doing good, you?</ChatBubbleOutgoing>
          <ChatBubbleIncoming>I have a certain proposal for you. Are you interested?</ChatBubbleIncoming>
          <ChatBubbleOutgoing>Sure, I'd love to hear the details.</ChatBubbleOutgoing>
          <ChatBubbleIncoming>Here you go:</ChatBubbleIncoming>
          <ChatBubbleIncoming>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</ChatBubbleIncoming>
          <ChatBubbleOutgoing>Sounds interesting. Do you wish to discuss this in person?</ChatBubbleOutgoing>
          <ChatBubbleIncoming>Sure, time and place?</ChatBubbleIncoming>
          <ChatBubbleOutgoing>Letting you know as soon as possible.</ChatBubbleOutgoing>
        </Box>
        <TextInput />
      </Container>
    </div>
  );
}

export default StaticChatPage;
