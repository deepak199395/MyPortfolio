import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "../Styles/Experience.css";
import { motion } from "framer-motion";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import ibmLogo from "../Assets/ibm-logo-2.png";
import quessLogo from "../Assets/Quess.jpeg";
import aspLogo from "../Assets/aps.jpeg";

const experiences = [
  {
    company: "IBM India Pvt Ltd",
    role: "React Native Developer",
    description: "Developed scalable and user-friendly mobile applications.",
    image: ibmLogo,

  },
  {
    company: "Quess Corp Ltd",
    role: "Mobile App Developer",
    description: "Built and optimized cross-platform mobile applications.",
    image: quessLogo,

  },
  {
    company: "ASP Tradelinks",
    role: "Frontend Developer",
    description: "Developed responsive web applications using React.",
    image: aspLogo,
  },
];
const Experience = () => {
  return (
    <div className="MainContainer">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Experience
      </motion.h2>

      <div className="expBox">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="cardContainer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="expCard">
              <CardMedia
                component="img"
                alt={exp.company}
                height="140"
                image={exp.image}
                className="cardImage"
              />
              <CardContent>
                <Typography className="company">{exp.company}</Typography>
                <Typography className="role">{exp.role}</Typography>
                <Typography className="description">{exp.description}</Typography>
              </CardContent>
              <CardActions>
                <Button className="learnMore">Learn More</Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
