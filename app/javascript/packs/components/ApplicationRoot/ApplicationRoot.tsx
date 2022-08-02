import React from "react";
import Button from '@mui/material/Button';

interface Props {
    data: any;
}

export default function ApplicationRoot(props: Props): JSX.Element {
    return <Button variant="contained">Hello World</Button>;
}
