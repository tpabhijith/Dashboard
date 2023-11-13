"use client";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import "./index.css";
import { MuiColorInput } from "mui-color-input";
import { useEffect, useState } from "react";
import { usePostStore } from "../store/Posts";
import { CreateDashboard } from "../components";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const HomeScreen = () => {
    const handleClose = () => {
        setModal(false);
    };
    const router = useRouter();
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [addModal, setAddModal] = useState(false);
    const { addLocal, dashboards, deleteDashboard } = usePostStore();

    let storedDashboards = "";
    useEffect(() => {
        storedDashboards = JSON.parse(localStorage.getItem("dashboards"));
    }, []);

    console.log(storedDashboards, "dash", dashboards);
    useEffect(() => {
        if (storedDashboards) {
            addLocal(storedDashboards);
        }
    }, []);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: "2px solid #000",
        borderRadius: "8px",
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <div className="cover">
                <div className="container">
                    <div className="top">
                        <h3>Dashboards</h3>
                        <button
                            className="add_button"
                            onClick={() => router.push(`/add`)}
                        >
                            Add
                        </button>
                    </div>
                    <div className="bottom">
                        {dashboards.map((item) => (
                            <>
                                <div className="widget">
                                    <div className="left">
                                        {/* <div className="image-container">
                                            <h3>Image</h3>
                                        </div> */}
                                        <h4 className="dashboardName">
                                            {item?.name}
                                        </h4>
                                    </div>
                                    <div className="right">
                                        <button
                                            className="button_items"
                                            onClick={() =>
                                                router.push(
                                                    `/dashboards/${item?.id}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="button_items"
                                            onClick={() => {
                                                setModal((prev) => !prev),
                                                    setSelectedId(item.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {
                <Modal
                    open={modal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <p style={{ fontWeight: "500" }}>
                            Are you sure you want to delete this item?
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "2rem",
                                gap: "1rem",
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="success"
                                className="mr-4"
                                onClick={() => {
                                    deleteDashboard(selectedId), handleClose();
                                }}
                            >
                                Yes
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleClose()}
                            >
                                No
                            </Button>
                        </div>
                    </Box>
                </Modal>
            }
            <CreateDashboard addModal={addModal} setAddModal={setAddModal} />
        </>
    );
};

export default HomeScreen;
