# using suhail's docker coz mine have issues

FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/Maher-Zubair/SIGMA-MD /root/Maher-Zubair/SIGMA-MD
WORKDIR /root/Maher-Zubair/SIGMA-MD
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]