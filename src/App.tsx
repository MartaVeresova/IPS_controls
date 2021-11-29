import React, {FC, useState} from 'react';
import style from './App.module.scss'
import {observer} from 'mobx-react-lite';
import {TreeMenu} from './main/components/promotionLevels/TreeMenu';
import {RightBlock} from './main/components/promotionLevels/RightBlock';


export const App: FC = observer(() => {
    const [isRightBlockShow, setIsRightBlockShow] = useState(false)


    return (
        <div className={style.wrap}>
            <div className={style.treeMenu}><TreeMenu setIsRightBlockShow={setIsRightBlockShow}/></div>
            {
                isRightBlockShow && <div><RightBlock/></div> //rightBlock
            }
        </div>
    );
})

