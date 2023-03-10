import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
export const SectionBaseStyle = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`