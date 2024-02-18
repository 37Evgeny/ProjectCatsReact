import CardCat from "../Card/Card";
import { Container, Grid } from "@mui/material";


const CardList =({cards}) => {
    return(

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
             <CardCat key={item._id} {...item}/>
          </Grid>
        ))}
      </Grid>
      
    );
};

export default CardList;