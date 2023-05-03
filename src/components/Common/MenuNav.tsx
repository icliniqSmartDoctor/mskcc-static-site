import * as CONSTANTS from '../../GlobalConstants'
import type { MskccMenu } from 'TypeSpecifier'

function MenuNav() {

    return (
        <>
            <div className='bg-primary relative h-16 w-full hidden lg:block'>
                <div className='container-alternate mx-auto px-10 flex justify-between items-center h-full'>
                    <div className='flex text-white items-center h-full tracking-wide w-full'>

                        {
                            Object.keys(CONSTANTS.MSKCC_MENU).map((res) => {
                                return <>
                                    {Array.isArray(CONSTANTS.MSKCC_MENU[res]) ?

                                        res.toLowerCase() === 'login' ?
                                            <div className='relative  h-full flex items-center ml-auto'>
                                                <div className='px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium'> <span>{res} </span> </div>
                                                <div className='mskcc-menu-nav-options h-auto top-16 right-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3'>
                                                    {
                                                        (CONSTANTS.MSKCC_MENU[res]).map((menuOpt: string) => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt).toString()}`}>
                                                                    <div className='h-auto py-1  w-full ml-auto'>
                                                                        <span className='capitalize'>{Object.keys(menuOpt).toString()}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }

                                                </div>
                                            </div> :
                                            <div className='relative  h-full flex items-center'>
                                                <div className='px-4 capitalize cursor-pointer menu-opt w-full h-full flex items-center font-medium'> <span>{res} +</span> </div>
                                                <div className='mskcc-menu-nav-options h-auto top-16  left-5 absolute w-60 max-w-60 leading-9 bg-primary  border-t-4 border-secondary px-5 py-3'>
                                                    {
                                                        (CONSTANTS.MSKCC_MENU[res]).map((menuOpt: string) => {
                                                            return <>
                                                                <a href={`${Object.values(menuOpt).toString()}`}>
                                                                    <div className='h-auto py-1  w-full ml-auto'>
                                                                        <span className='capitalize'>{Object.keys(menuOpt).toString()}</span>
                                                                    </div>
                                                                </a>
                                                            </>
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        :

                                        <a href={`${CONSTANTS.MSKCC_MENU[res]}`}>
                                            <div className='mx-4 capitalize font-medium'>
                                                {
                                                    res.toString().toLowerCase() === 'home' ? <span className="material-symbols-outlined">
                                                    home
                                                    </span> : res
                                                }
                                            </div>
                                        </a>
                                    }
                                </>

                            })

                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuNav