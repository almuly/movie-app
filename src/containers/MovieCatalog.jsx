import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ModalCard from "../components/ModalCard";
import Modal from "../components/Modal";
import "../styles/containers/MovieCatalog.css";
import { useParams } from "react-router";

const MovieCatalog = ({ movies }) => {
    const initialState = { openModal:false, movie:{} };
    const [state, setState] = useState ({ ...initialState });
    const params = useParams ();

    useEffect (() => {
        const { id } = params || {};
        if (id){
            const movie = movies.find (item => (+id === item.id));

            if (movie){
                setState ({ openModal:true, movie })
            }else{ history.push('/');}
        }
    }, [params]);

    const closeModal = () => {
        setState ({ ...initialState });
    };
    console.log (state);
    return (
        <div className="container catalog">
            {movies.length ? (
                movies.map ((movie) => <Card key={movie.id} movie={movie}/>)
            ) : (
                <div>No movies</div>
            )}
            <Modal display={state.openModal} onClose={closeModal}>
                <ModalCard movie={state.movie}/>
            </Modal>
        </div>
    );
};

MovieCatalog.displayName = "MovieCatalog";

const mapStateToProps = (state) => ({
    movies:state.movies.current,
});

export default connect (mapStateToProps) (MovieCatalog);
