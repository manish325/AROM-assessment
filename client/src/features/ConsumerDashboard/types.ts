import { ALIGNMENTS } from "./constants/alignments.enum"
import { AnswerType } from "./constants/answer-type.enum"

export interface IUserData {
    firstName : string,
    lastName : string,
    username : string,
    email : string,
    mobile : string
}

export interface IPosition {
    id : number,
    positionName : string,
    positionImage : string
}

export interface IBodyPart {
    id : number,
    bodyPartName : string,
    bodyPartImage : string,
}

export interface IOption {
    id : number,
    optionName : string
}

export interface IExerciseQuestion {
    id : number,
    questionName : string,
    answerType : AnswerType,
    options: IOption[]
}

export interface IAssessmentRecord {
    
}

export interface IDashboardState {
    user : IUserData,
    selectedPosition : IPosition,
    selectedAlignment : ALIGNMENTS,
    selectedBodyPart : IBodyPart
}