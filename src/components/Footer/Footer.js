import React from "react";

import Button from '@mui/material/Button';

import Favorite from '@mui/icons-material/Favorite';
import Comment from '@mui/icons-material/Comment';
import Send from '@mui/icons-material/Send';

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <Favorite />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <Send />
          {shares}
        </div>
      </div>
    </div>
  );
}
