"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const CreateHeader = ({ dashData, handleSave, setDashData }) => {
    const router = useRouter();

    return (
        <Box sx={{ width: "100%", height: "80px", backgroundColor: `#141414` }}>
            <Box
                sx={{
                    width: "90%",
                    margin: "0 auto",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <input
                        type="text"
                        placeholder={
                            dashData.name ? dashData.name : "Dashboard Name"
                        }
                        onChange={(e) =>
                            setDashData((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                        value={dashData.name}
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            color: "#fff",
                            fontSize: "30px",
                        }}
                    />
                </Box>
                {/* )} */}
                <div>
                    <Button
                        variant="outlined"
                        style={{ marginRight: "2rem" }}
                        onClick={() => {
                            router.push(`/`);
                        }}
                    >
                        Back to Home
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleSave(), router.push(`/`);
                        }}
                    >
                        Save
                    </Button>
                </div>
            </Box>
        </Box>
    );
};

export default CreateHeader;
