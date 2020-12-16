import {Button, ButtonGroup} from "@material-ui/core";

const Header = ({changeUrl}) => {
    return (
        <div>
            <h2>Выберете данные, которые хотите получить:</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => {
                    changeUrl('api/proceeds-3-days');
                }}>Вариант a</Button>
                <Button onClick={() => {
                    changeUrl('api/client-expenses');
                }}>Вариант b</Button>
                <Button onClick={() => {
                    changeUrl('api/top-clients');
                }}>Вариант c</Button>
                <Button onClick={() => {
                    changeUrl('api/orders');
                }}>Вариант d</Button>
            </ButtonGroup>
        </div>
    );
}

export default Header;