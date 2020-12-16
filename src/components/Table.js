import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const TableComponent = ({data}) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {data && Object.keys(data[0]).map(x => <TableCell>{x}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map(obj => <TableRow>
                        {Object.values(obj).map(row => <TableCell>{row}</TableCell>)}
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default TableComponent;