import React from 'react'
import { useState } from 'react'

export default function SubText() {
    const {Text,SetText} = useState('');
    const {limit,SetLimit}= useState(3);   
  return (
    <div>SubText</div>
  )
}
