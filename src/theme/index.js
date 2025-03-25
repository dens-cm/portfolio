import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        base: '#FFFFFF', //white
        primary: '#575757', //black
        highlight: '#6D9886', //green
        accent: '#D9CAB3', //light brown
        placeholder: '#b0b3b5',
        hover: '#dddddd',
        hover1: '#f2f2f2',
        warning: '#EA5455'
    },
    fontSizes: {
        xs: '.7vw',
        sm: '.8vw',
        md: '.9vw',
        lg: '1vw',
        xl: '1.5vw',
        xxl: '2vw'
    },
    components: {
        Heading: {
            defaultProps: {
                variant: 'title'
            },
            variants: {
                title: {
                    color: 'highlight',
                    fontSize: 'lg',
                    textTransform: 'uppercase'
                },
                content: {
                    color: 'primary',
                    fontSize: 'md'
                }
            }
        },
        Text: {
            defaultProps: {
                variant: 'body'
            },
            variants: {
                body: {
                    color: 'primary',
                    fontSize: 'md'
                },
                muted: {
                    color: 'placeholder',
                    fontSize: 'sm'
                },
                highlight: {
                    color: 'highlight',
                    fontSize: 'md',
                    fontWeight: '700'
                },
                caption: {
                    color: 'primary',
                    fontSize: 'sm',
                    fontStyle: 'italic'
                },
                error: {
                    color: 'warning',
                    fontSize: 'sm',
                    fontWeight: '500'
                }
            }
        },
        Input: {
            defaultProps: {
                variant: 'filled'
            },
            variants: {
                filled: {
                    field: {
                        height: '2vw',
                        color: 'primary',
                        fontSize: 'sm',
                        bg: '#F6F6F6',
                        borderRadius: '.7vw',
                        _focus: {
                            bg: 'base',
                            color: 'primary'
                        },
                        _hover: {
                            bg: '#F6F6F6',
                            color: 'placeholder',
                            border: '.1vw solid',
                            borderColor: 'hover'
                        },
                        _placeholder: {
                            color: 'placeholder'
                        }
                    }
                }
            }
        },
        Button: {
            defaultProps: {
                variant: 'highlight'
            },
            variants: {
                primary: {
                    height: '2vw',
                    color: 'base',
                    fontSize: 'sm',
                    bg: 'primary',
                    borderRadius: '.7vw',
                    transition: '.3s',
                    _hover: {
                        bg: 'hover',
                        color: 'primary',
                        transition: '.3s'
                    }
                },
                highlight: {
                    height: '2vw',
                    color: 'base',
                    fontSize: 'sm',
                    bg: 'highlight',
                    borderRadius: '.7vw',
                    transition: '.3s',
                    _hover: {
                        bg: 'hover',
                        color: 'highlight',
                        transition: '.3s'
                    }
                },
                outline: {
                    height: '2vw',
                    color: 'highlight',
                    fontSize: 'sm',
                    bg: 'none',
                    border: '.1vw solid',
                    borderColor: 'highlight',
                    borderRadius: '.7vw',
                    transition: '.3s',
                    _hover: {
                        bg: 'highlight',
                        color: 'white',
                        transition: '.3s'
                    }
                }
            }
        },
        Icon: {
            baseStyle: {
                strokeWidth: '.1vw',
                fontSize: '1.2vw'
            }
        },
        Modal: {
            baseStyle: {
                dialog: {
                    p: '1.5vw',
                    borderRadius: '.7vw'
                }
            }
        },
        Card: {
            baseStyle: {
                container: {
                    borderRadius: '1vw',
                    boxShadow: '0vw .2vw .5vw rgba(56, 56, 57, 0.09)'
                }
            }
        },
        Menu: {
            baseStyle: {
                list: {
                    borderRadius: '.7vw',
                    p: '1vw',
                    boxShadow: 'md'
                }
            }
        }
    },
    styles: {
        global: {
            body: {
                bg: 'base',
                transition: 'background .3s ease'
            }
        }
    }
})

export default theme
