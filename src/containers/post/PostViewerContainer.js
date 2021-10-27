import React,{ useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import PostViewer from "../../components/post/PostViewer";
import { readpost, unloadPost } from "../../modules/post";

const PostViewerContainer = ({match}) => {
    //처음 마운트 될때 포스트 읽기 API 요청
    const {postId} = match.params;
    const dispatch = useDispatch();
    const {post, error, loading }= useSelector(({post, loading}) => ({
        post: post.post,
        error:post.error,
        loading: loading['post/READ_POST'],
    }));

    useEffect(()=> {
        dispatch(readpost(postId));
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    return <PostViewer post={post} loading={loading} error={error} />
};

export default withRouter(PostViewerContainer);