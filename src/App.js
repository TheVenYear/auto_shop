import {Box, Container} from "@material-ui/core";

import Header from "./components/Header";
import {useEffect, useState} from "react";
import TableComponent from "./components/Table";

function App() {
    const [state, setState] = useState(null);

    const changeView = (url) => {
        fetch(url).then(response => response.json()).then(data => {
            setState(data);
        });
    }

    useEffect(() => {
        changeView('/api');
    }, []);

    return (
        <Container>
            <Box mb={3}>
                <Header changeUrl={changeView}/>
            </Box>

            <TableComponent data={state}/>
        </Container>
    );
}

export default App;
