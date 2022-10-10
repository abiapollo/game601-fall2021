using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        bool a = true;

        bool b = false;

        bool c = true;

        if ((a || c) && b)
        {

            print("Pam!");
        }
        else
        {

            print("Bum!");
        }
    }

    // Update is called once per frame
    void Update()
    {
  
    }
}
