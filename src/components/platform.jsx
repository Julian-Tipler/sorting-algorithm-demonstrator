import React, {useState} from 'react'
import './platform.css'
import mergeSort from '../algorithms/merge_sort'

export default function Platform() {
    const [nums,setNums] = useState([4,3,1,2])

    const performMergeSort = () => {
        let newNums = mergeSort(nums);
        setNums(newNums)
    }

    return (
        <div className='nums'>
            {nums.map(num=> {
                return <div className='num'>{num}</div>
            })}
            <button onClick={performMergeSort}></button>
        </div>
    )
}
