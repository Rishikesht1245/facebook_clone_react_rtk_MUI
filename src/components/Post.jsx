import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Checkbox from "@mui/material/Checkbox";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useDispatch, useSelector } from "react-redux";
import { addLike, removeLike } from "../store/store";

const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const handleLikeClick = (postIndex, liked) => {
    if (liked) {
      dispatch(removeLike(postIndex));
    } else {
      dispatch(addLike(postIndex));
    }
  };

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Card key={post.id} sx={{ marginBottom: "20px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {post?.icon}
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreHorizIcon />
                  <CloseIcon />
                </IconButton>
              }
              title={post?.name}
              subheader={post?.Date}
            />
            <CardMedia
              component="img"
              height="auto%"
              image={post?.image}
              alt="Captains"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post?.Description}
              </Typography>
            </CardContent>
            {/* Buttons */}
            <CardActions
              disableSpacing
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleLikeClick(index, post.liked)}
              >
                <Checkbox
                  label="236 likes"
                  icon={<ThumbUpOffAltIcon />}
                  checkedIcon={<ThumbUpAltIcon />}
                />
                <Typography variant="small" sx={{ fontSize: "16px" }}>
                  {post?.likeCount} Likes
                </Typography>
              </IconButton>
              <IconButton
                aria-label="share"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ChatBubbleOutlineIcon />
                <Typography
                  variant="small"
                  sx={{ fontSize: "16px", marginLeft: "8px" }}
                >
                  {post?.commentCount} Comments
                </Typography>
              </IconButton>
              <IconButton aria-label="share">
                <ReplyIcon />
                <Typography
                  variant="small"
                  sx={{ fontSize: "16px", marginLeft: "8px" }}
                >
                  {post?.shareCount} shares
                </Typography>
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
export default Post;
