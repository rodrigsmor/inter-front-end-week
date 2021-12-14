import {
    StatementItemInfo,
    StatementContainer,
    StatementItemImage,
    StatementItemContainer,
} from './styled';

import { format } from 'date-fns';
import { FiDollarSign } from 'react-icons/fi';

interface StatementItem {
    user: {
        firstName: string,
        lastName: string
    },
    value: number,
    type: 'pay' | 'received',
    updateAt: Date
}

const StatementItem = ({ user, value, type, updateAt }:  StatementItem) => {
    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>

            <StatementItemInfo>
                <p className="primary-color"> 
                    {value.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </p>
                <p> 
                    { type === 'pay' ? 'Pago a: ' : 'Recebido de: ' }
                    <strong> { user.firstName } { user.lastName } </strong>
                </p>
            <p> { format(updateAt, "dd/MM/yyyy 'às' HH:mm:'h") } </p>
            </StatementItemInfo>
        </StatementItemContainer>
    );
}

const Statement = () => {
    const statements: StatementItem[] = [
        {
            user: {
                firstName: 'Pablo',
                lastName: 'Henrique'
            },
            value: 250.0, 
            type: 'pay',
            updateAt: new Date()
        },
        {
            user: {
                firstName: 'José',
                lastName: 'Santos'
            },
            value: 270.0, 
            type: 'received',
            updateAt: new Date()
        },
    ];

    return (
        <StatementContainer>
            {
                statements.map(statement => <StatementItem {...statement}/>)
            }
        </StatementContainer>
    );
}

export default Statement;