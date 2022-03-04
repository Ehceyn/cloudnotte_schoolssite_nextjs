import Image from 'next/image';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { useFormik } from 'formik';
import { Button2, Button4 } from '../EnrollmentLandingPage/Button';
import { useEnrollmentTabsValue } from '../../../StateProviders/EnrollmentTabsProvider';
import { useFormDetailsStateValue } from '../../../StateProviders/FormDetailsProvider';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from '../../Loader';

function EnrollmentAcademicDetails({ onEnroll, display }) {
  const [fee, setFee] = useState('Please select a class');
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();

  // DISPATCH ENROLLMENT TAB STATE
  const changeTab = (id) => {
    console.log('tab: ' + id);
    dispatch({
      type: 'TOGGLE_ENROLLMENT_TAB',
      item: id,
    });
  };

  //  DISPATCH STUDENTS DETAILS TO FORM DETAILS STORE
  const pushToStore = (formdetails) => {
    formDetailsDispatch({
      type: 'ADD_TO_FORM_DETAILS_STORE',
      item: { id: 2, appendedForm: formdetails },
    });
  };

  // REMOVE FROM FORM DETAILS STORE
  const removeFromStore = () => {
    formDetailsDispatch({
      type: 'REMOVE_FROM_FORM_DETAILS_STORE',
    });
  };

  // INITIAL FORM VALUES
  let initialValues = {
    selectClass: '',
    prevSchool: '',
    reason: '',
    health: '',
    uploads: [''],
  };

  // FORMIK VALIDATION SCHEMA WITH YUP
  const FILE_SIZE = 1024 * 1024;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'pdf', 'docx'];
  const validationSchema = Yup.object({
    selectClass: Yup.string().required('This field is required'),
    prevSchool: Yup.string().required('This field is required'),
    health: Yup.string().required('This field is required'),
    reason: Yup.string().required('This field is required'),
    uploads: Yup.mixed()
      .nullable()
      .required()
      .test(
        'fileSize',
        'File Size is too large',
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        'fileType',
        'Unsupported File Format',
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  // SCHOOL FEES BASED ON CLASS
  const schoolFees = (class_) => {
    switch (class_.toLowerCase()) {
      case 'pre-nursery':
        return 'N5000';
      case 'nursery 1':
        return 'N5000';
      case 'nursery 2':
        return 'N5000';
      case 'nursery 3':
        return 'N5000';
      case 'primary 1':
        return 'N10000';
      case 'primary 2':
        return 'N10000';
      case 'primary 3':
        return 'N10000';
      case 'primary 4':
        return 'N10000';
      case 'primary 5':
        return 'N10000';
      case 'primary 6':
      case 'jss 1':
        return 'N5,000';
      case 'jss 2':
        return 'N5,000';
      case 'jss 3':
        return 'N5,000';
      case 'sss 1':
        return 'N10,000';
      case 'sss 2':
        return 'N10,000';
      case 'sss 3':
        return 'N10,000';
      default:
        return 'Please select a class';
    }
  };

  // FILE REQUIRED DUMMY ARRAY
  const fileRequired = [
    {
      name: 'Upload Result',
      fileType: 'docx, pdf',
    },
    {
      name: 'Upload LGA Identification',
      fileType: 'docx,pdf,jpg,png',
    },
    {
      name: 'First School Leaving Certificate',
      fileType: 'docx,pdf,jpg,png',
    },
    {
      name: 'Land Document',
      fileType: 'docx,pdf,jpg,png',
    },
    {
      name: 'Household Document',
      fileType: 'docx,pdf,jpg,png',
    },
  ];

  // SCHOOL'S CLASSES ARRAY
  const classesArray = [
    'Pre-nursery',
    'Nursery 1',
    'Nursery 2',
    'Nursery 3',
    'Primary 1',
    'Primary 2',
    'Primary 3',
    'Primary 4',
    'Primary 5',
    'Primary 6',
    'JSS 1',
    'JSS 2',
    'JSS 3',
    'SSS 1',
    'SSS 2',
    'SSS 3',
  ];

  // SET SCHOOL FEES
  const changeSchoolFee = (e) => {
    setFee(schoolFees(e.target.value));
  };

  console.log(formDetailsStore, 'The Store form data');
  console.log(formik.values, 'The Parent form data');
  console.log(formik, 'The  formik');

  return (
    <section
      className={`${
        display === 4 ? 'flex' : 'hidden'
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
      <div className="w-full bg-white">
        <p className="font-bold mb-3">Academic details</p>

        <form
          id="academicDetailsForm"
          className="flex flex-col sm:flex-row w-full"
        >
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <div className="flex flex-col items-center self-start w-full mr-0 sm:mr-14">
                <div className="mb-6 w-full ">
                  <select
                    id="selectClass"
                    name="selectClass"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF] "
                    onChange={changeSchoolFee}
                    onBlur={formik.handleBlur}
                    required
                  >
                    <option disabled="disabled" selected="selected">
                      Select class/program of entry{' '}
                    </option>
                    {classesArray.map((eachClass, index) => {
                      return <option key={index}>{eachClass}</option>;
                    })}
                  </select>
                  {fee && (
                    <p className="text-red-600" id="schoolFee" name="schoolFee">
                      {fee === 'Please select a class'
                        ? `${fee}`
                        : `Your School Fee is ${fee}`}
                    </p>
                  )}
                </div>
                <div className="mb-6 w-full ">
                  <input
                    type="text"
                    id="prevSchool"
                    name="prevSchool"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Name of previous school (optional)"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.prevSchool}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="reason"
                    name="reason"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Reason for leaving school (optional)"
                    required
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.reason}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="health"
                    name="health"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Any health challenges? Please specify it here"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.health}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col items-center w-full" ref={uploads}>
                <p className="text-base font-medium mb-8">Documents required</p>
                <div className=" w-full bg-[#F8FBFF] px-10 py-14">
                  {fileRequired.map((eachFile, index) => {
                    return (
                      <div className="mb-6 w-full " key={index}>
                        <label htmlFor={eachFile.id}>
                          <input
                            type="file"
                            id={eachFile.id}
                            name={eachFile.id}
                            className="hidden"
                            placeholder={eachFile.name}
                            accept={eachFile.fileType}
                            required
                          />
                          <article className="shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 bg-[#FFF] cursor-pointer">
                            <p className="flex flex-col justify-center items-center">
                              <Image
                                width={28}
                                height={28}
                                src="/assets/icons/Vector-upload-icon.svg"
                                className="w-7 h-7"
                                alt="upload icon"
                              />
                              {eachFile.name}
                            </p>
                          </article>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div
                onClick={() => {
                  changeTab(3);
                }}
              >
                <Button4
                  customStyle="w-full border mr-10 xs:mr-0"
                  py="py-3 px-3"
                  bg={`bg-[#fff] text-[#8EA2BA]
                 `}
                >
                  Previous
                </Button4>
              </div>
              <div onClick={onEnroll}>
                <Button2
                  customStyle="w-[200px]"
                  py="py-3 px-1"
                  bg={`${
                    formik.isValid
                      ? 'bg-[#5F9AF2] text-[#E7F0FB]'
                      : 'cursor-not-allowed bg-[#293b57] text-[#476697]'
                  }`}
                >
                  Proceed
                </Button2>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentAcademicDetails;
