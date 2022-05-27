import cv2
import face_recognition
import os
import sys, time


# Get a sampling frame from webcam for reference
print(" [INFO] sampling frames from the dataset for webcam...")
video_capture = cv2.VideoCapture(0)

# sample picture is loaded and working on to recognize 
mehak_image = face_recognition.load_image_file("dataset_family/mehak.jpg")
mehak_face_encoding = face_recognition.face_encodings(mehak_image)[0]

# # sample picture is loaded 
vidhi_image = face_recognition.load_image_file("dataset_family/vidhi.jpeg")
vidhi_face_encoding = face_recognition.face_encodings(vidhi_image)[0]


# Load a second sample picture and learn how to recognize it.
abhishek_image = face_recognition.load_image_file("dataset_family/abhishek.jpeg")
abhishek_face_encoding = face_recognition.face_encodings(abhishek_image)[0]

# Load a sample picture and learn how to recognize it.
harshit_image = face_recognition.load_image_file("dataset_family/harshit.jpeg")
harshit_face_encoding = face_recognition.face_encodings(harshit_image)[0]

# Load a sample picture and learn how to recognize it.
neetu_image = face_recognition.load_image_file("dataset_family/neetu.jpeg")
neetu_face_encoding = face_recognition.face_encodings(neetu_image)[0]

# Load a sample picture and learn how to recognize it.
radhika_image = face_recognition.load_image_file("dataset_family/radhika.jpeg")
radhika_face_encoding = face_recognition.face_encodings(radhika_image)[0]

# Load a sample picture and learn how to recognize it.
vyakhya_image = face_recognition.load_image_file("dataset_family/vyakhya.jpeg")
vyakhya_face_encoding = face_recognition.face_encodings(vyakhya_image)[0]

# Load a sample picture and learn how to recognize it.
princy_image = face_recognition.load_image_file("dataset_family/princy.jpeg")
princy_face_encoding = face_recognition.face_encodings(princy_image)[0]


# Load a third sample picture and learn how to recognize it.
amisha_image = face_recognition.load_image_file("dataset_family/amisha.jpeg")
amisha_face_encoding = face_recognition.face_encodings(amisha_image)[0]

# Load a sample picture and learn how to recognize it.
sourabh_image = face_recognition.load_image_file("dataset_family/sourabh.jpeg")
sourabh_face_encoding = face_recognition.face_encodings(sourabh_image)[0]


# create encoded arrays of known faces and names
known_encoding_face = [
    vidhi_face_encoding,
    neetu_face_encoding,
    princy_face_encoding,
    mehak_face_encoding,
    amisha_face_encoding,
    vyakhya_face_encoding,
    radhika_face_encoding,
    harshit_face_encoding,
    abhishek_face_encoding,
    sourabh_face_encoding,
    
]
known_face_names = [
    "vidhi",
    "neetu",
    "abhishek",
    "mehak",
    "harshit",
    "sourabh",
    "amisha",
    "radhika",
    "vyakhya",
    "princy",
]

#some varibles  are initialize
face_names = []
face_encodings = []
face_locations = []
process_this_frame = True


while True:
    # for a single frame video
    ret, frame = video_capture.read()

    # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
    rgb_small_frame = small_frame[:, :, ::-1]

    # For faster face recognition processing resize frame of video to 1/4 size 
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)


    # Process to save time of every other frame of video
    if process_this_frame:
        # In current frame of video find all the face encodings and faces
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)
        face_names = []

        for face_encoding in face_encodings:
            # check if face is match with face save in dataset
            distances = face_recognition.face_distance(known_encoding_face, face_encoding)
            matches = face_recognition.compare_faces(known_encoding_face, face_encoding, 0.55)
           
	    
            name = "Unknown"

            # If a match was found in known_encoding_face, use the one which had minimum face distance i.e. the closest match
            if True in matches:
                best_match_index = distances.argmin()
                name = known_face_names[best_match_index]

            face_names.append(name)

    process_this_frame = not process_this_frame


    # Result will display as
    for (top, right, bottom, left), name in zip(face_locations, face_names):
        #Scaled to 1/4 size to the frame we detected, Scale back up face locations 
        bottom *= 4
        top *= 4
        right *= 4    
        left *= 4

        # A box is draw around the face
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        #A label draw with a name below the face
        cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), 5)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
       
    # Resulting image will display
    
    cv2.imshow('Camera', frame)
    if 'Unknown' in face_names:
         # To prevent sending multiple emails when the face is in the frame for a long time       
	    if (time.time()-os.path.getctime('/home/pi/facerecog/test.jpg')) > 30:   
    		img = cv2.imwrite("test.jpg",frame)
    os.system('sh mailme.sh')

    #For quit hit 'q' on the keyboard
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release handle to the webcam
video_capture.release()
cv2.destroyAllWindows()













   

