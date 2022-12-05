import { useFormRegister } from '../hooks/useFormRegister';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, } from '@mui/material/colors';
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, } from '@mui/material';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
            width: 140,
        },
    },
}

const labels = [
    "On wheels",
    "Box game",
    "Art",
    "Baby",
    "Doll",
    "Puzzle",
    "Outdoor",
    "Battery Powered",
    "Stragitics"
]

function getStyles(name, labels, theme) {
    if (labels) return {
        width: 200,
        fontWeight:
            labels.indexOf(name) === -1 ?
                theme.typography.fontWeightRegular :
                theme.typography.fontWeightMedium,
    }
}

export const MultipleSelectChip = ({onChangeFilter}) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: cyan[400]
            }
        }
    })

    const { filterBy } = useSelector(state => state.toyModule)
    const [register] = useFormRegister(filterBy, onChangeFilter)

    return (
        <section className="multiple-select-chip label-filter">
            <ThemeProvider theme={theme}>
                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="multiple-chip-label">Filter by label</InputLabel>
                    <Select id="multiple-chip"
                        labelId="multiple-chip-label"
                        name="label"
                        multiple
                        {...register('labels' , 'select')}
                        autoWidth={true}
                        value={filterBy.labels || []}
                        input={<OutlinedInput id="select-multiple-chip" sx={{ borderRadius: '10px' }} label="Filter by label" />}
                        renderValue={() => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {filterBy.labels.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {labels.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, filterBy.labels, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </section>
    )
}